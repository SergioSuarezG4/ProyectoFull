package models

import "time"

type UserResponse struct {
	ID            uint      `json:"id"`
	Nombre        string    `json:"nombre"`
	Email         string    `json:"email"`
	RolID         uint      `json:"rol_id"`
	FechaRegistro time.Time `json:"fecha_registro"`
	Role          Role      `json:"role"`
}
