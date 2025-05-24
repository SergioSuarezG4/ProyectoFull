package controllers

import (
	"backend/config"
	"backend/models"
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/gin-gonic/gin"
)

// Obtener todos los usuarios
func GetUsers(c *gin.Context) {
	var users []models.User
	config.DB.Preload("Role").Find(&users)
	c.JSON(http.StatusOK, users)
}

// Función para crear un nuevo usuario
func CreateUser(c *gin.Context) {
	var user models.User

	// Validar JSON recibido
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Encriptar la contraseña
	// hashedPassword, err := scripts.HashPassword(user.Password)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al encriptar la contraseña"})
	// 	return
	// }
	// user.Password = hashedPassword

	if err := config.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al registrar el usuario"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"id":    user.ID,
		"email": user.Email,
		"name":  user.Nombre,
	})
}

// Obtener usuario por ID
func GetUserByID(c *gin.Context) {
	id := c.Param("id")
	var user models.User
	if err := config.DB.Preload("Role").First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuario no encontrado"})

		return
	}
	c.JSON(http.StatusOK, user)
}

// Actualizar usuario
func UpdateUser(c *gin.Context) {
	id := c.Param("id")
	var user models.User
	if err := config.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Usuario no encontrado"})
		return
	}
	var input struct {
		Nombre   string `json:"nombre"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user.Nombre = input.Nombre
	user.Email = input.Email

	if input.Password != "" {
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al encriptar la contraseña"})
			return
		}
		user.Password = string(hashedPassword)
	}

	if err := config.DB.Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error al actualizar el usuario"})
		return
	}

	c.JSON(http.StatusOK, user)
}

// Eliminar usuario
func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	config.DB.Delete(&models.User{}, id)
	c.JSON(http.StatusOK, gin.H{"message": "Usuario eliminado"})
}
