package repository

import (
	"fmt"
	"log"

	"gopkg.in/routeros.v2"
)

//TODO:Implement custom errors

type MikrotikRepository interface {
	GetActiveConnection(user string) map[string]string
}

type mikrotikRepository struct {
	client *routeros.Client
} //Receiver

func New(address, username, password, port string) (MikrotikRepository, error) {

	formatAddress := fmt.Sprintf("%s:%s", address, port)

	client, err := routeros.Dial(formatAddress, username, password)

	if err != nil {
		return nil, err
	}

	return &mikrotikRepository{client}, nil
}

func (mr *mikrotikRepository) GetActiveConnection(user string) map[string]string {
	c, err := mr.client.Run("/ppp/active/print")
	if err != nil {
		log.Println(err)
	}
	var userInfo map[string]string

	for _, c := range c.Re {
		if user == c.Map["name"] {
			userInfo = c.Map
		}
	}

	return userInfo
}
