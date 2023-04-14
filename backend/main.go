package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

// Retrieve Asanas (poses) from data store
// func getAsanas() {

// }

func Router() http.Handler {
	router := mux.NewRouter()

	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple server")
	})

	router.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
		// fmt.Fprintf(w, `{"some": "test"}`)
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
	srv.ListenAndServe()
}
