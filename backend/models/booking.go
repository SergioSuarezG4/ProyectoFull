package models

import (
	"time"

	"gorm.io/gorm"
)

type Booking struct {
	gorm.Model
	UserID     uint      `json:"user_id"`
	SpaceID    uint      `json:"space_id"`
	Fecha      time.Time `json:"fecha"`
	HoraInicio string    `json:"hora_inicio"`
	HoraFin    string    `json:"hora_fin"`
	Estado     string    `json:"estado"` // "pendiente", "confirmada","cancelada"
	User       User      `json:"user" gorm:"foreignKey:UserID"`
	Space      Space     `json:"space" gorm:"foreignKey:SpaceID"`
}
