package models
import (
 "gorm.io/gorm"
 "time"
)
type Booking struct {
 gorm.Model
 UserID uint `json:"user_id"`
 SpaceID uint `json:"space_id"`
 Fecha time.Time `json:"fecha"`
 HoraInicio string `json:"hora_inicio"`
 HoraFin string `json:"hora_fin"`
 Estado string `json:"estado"` // "pendiente", "confirmada","cancelada"
}