package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/julienschmidt/httprouter"
)

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Welcome!\n")
}

func Video(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	if ps.ByName("video") == "/" {
		Index(w, r)
		// fmt.Fprintf(w, "XDDD hello")
	} else {
		RenderVideo(w, r, ps)
		// fmt.Fprintf(w, "hello, %s!\n", ps)
	}
}

func RenderVideo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	var videoUrl = strings.TrimPrefix(ps.ByName("video"), "/")
	fmt.Fprintf(w, "ASD XD, %s", videoUrl)
}

func main() {
	router := httprouter.New()
	router.GET("/*video", Video)

	log.Fatal(http.ListenAndServe(":8080", router))
}
