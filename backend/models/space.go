package models
import "gorm.io/gorm"
type Space struct {
 gorm.Model
 Nombre string `json:"nombre"`
 Descripcion string `json:"descripcion"`
 Capacidad int `json:"capacidad"`
 PrecioPorHora float64 `json:"precio_por_hora"`
}