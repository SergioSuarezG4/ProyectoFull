package models
import "gorm.io/gorm"
type Payment struct {
 gorm.Model
 BookingID uint `json:"booking_id"`
 Monto float64 `json:"monto"`
 Metodo string `json:"metodo"` // "efectivo", "tarjeta", "transferencia"
 Estado string `json:"estado"` // "pendiente", "pagado", "rechazado"
}