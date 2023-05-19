package main

import (
	"context"
	"log"
	"os"

	"github.com/OzkrOssa/redvisor-react/backend/repository"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) CheckActiveUser(user string, host string) map[string]string {
	mkt, err := repository.New(host, os.Getenv("MIKROTIK_API_USER"), os.Getenv("MIKROTIK_API_PASSWORD"), os.Getenv("MIKROTIK_API_PORT"))
	if err != nil {
		log.Println(err)
	}

	userInfo := mkt.GetActiveConnection(user)
	return userInfo
}
