package models

import "time"

type User struct {
	ID            uint      `json:"id"`
	Nombre        string    `json:"nombre"`
	Email         string    `json:"email"`
	Password      string    `json:"password,omitempty"` // Así se puede recibir, pero solo se omite si está vacío
	RolID         uint      `json:"rol_id"`
	FechaRegistro time.Time `json:"fecha_registro"`
	Role          Role      `json:"role" gorm:"foreignKey:RolID"`
}
