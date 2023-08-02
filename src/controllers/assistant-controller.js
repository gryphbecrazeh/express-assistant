// hello_controller.js
import { Controller } from "@hotwired/stimulus"
import axios from "axios"

export default class extends Controller {

    connect() {
        console.log('Hello, Stimulus!')
    }

    post() {
        
    }

}
