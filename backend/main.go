package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

type Asana struct {
	Benefits     string `json:"benefits"`
	Name         string `json:"name"`
	Notes        string `json:"notes"`
	Instructions string `json:"instructions"`
	Sanskrit     string `json:"sanskrit"`
}

func getAsanas() {

}

// Retrieve Asanas (poses) from data store
func getAsanasHandler(w http.ResponseWriter, r *http.Request) {

	asana := []Asana{
		{
			Benefits: `Strengthens the upper body, hands wrists and fingers.
		Elongates the spine. Stretches the hamstrings, calves and Achilles. Improves circulation. Relieves tension and stress.",
		`,
			Name:         "Downward Dog",
			Instructions: "",
			Sanskrit:     "Adho Muka Svanasana",
		},
		{
			Name:     "Upward Dog",
			Sanskrit: "Urdhva Mukha Svanasana",
		},
	}

	w.Header().Add("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(&asana); err != nil {
		// w.Header().Set("Content-Type")
		fmt.Println("uh oh failed writing the asana out")
		return
	}

}

func Router() http.Handler {
	router := mux.NewRouter()

	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple server")
	})

	router.HandleFunc("/v1/asanas", getAsanasHandler)

	router.HandleFunc("/poses", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "poses")
	})

	router.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, `{"some": "test"}`)
	})
	return router
}

func main() {
	c := cors.AllowAll()

	fmt.Println("Namaste Healthy")
	// router()
	// http.ListenAndServe(":8080", nil)

	handler := c.Handler(Router())

	srv := &http.Server{
		Addr:    ":8080",
		Handler: handler,
	}
	err := srv.ListenAndServe()
	if err != nil {
		log.Fatalln("Error with server,", err)
	}
}
