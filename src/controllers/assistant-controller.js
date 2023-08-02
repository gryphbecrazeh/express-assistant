import { Controller } from "@hotwired/stimulus"
import axios from "axios"

export default class extends Controller {

    static targets = ["input", "context"]
    static values = {
        route: {
            default: '/api',
            type: String
        }
    }
    connect() {
        console.log('assistant controller connected')
    }

    async post(e) {
        console.log('posting', this.routeValue)
        axios.post(this.routeValue ?? '/api', {
            input: this.inputTarget.value,
            context: this.contextTarget.value,
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
            console.log(err.message)
            console.log(err.code)


        })

    }

}
