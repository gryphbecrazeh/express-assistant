import { Controller } from "@hotwired/stimulus"
import axios from "axios"

export default class extends Controller {

    static targets = ["input", "context", "message"]
    static values = {
        route: {
            default: '/api',
            type: String
        }
    }

    // connect() {
    //     console.log('assistant controller connected')
    //     console.log(this.routeValue)
    //     console.log(this.inputTarget)
    //     console.log(this.contextTarget)
    //     console.log(this.messageTarget)
    // }

    async post(e) {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.messageTarget.innerText = 'Loading...'
        axios.post(this.routeValue ?? '/api', {
            input: this.inputTarget.value,
            context: this.contextTarget.value,
        }).then(res => {
            // let messageData = JSON.parse(res.data.message)
            this.inputTarget.value = ''
            // this.messageTarget.innerText = messageData.message ?? messageData.request 
            this.messageTarget.innerText = res.data.message
            this.contextTarget.value = res.data.context
        }).catch(err => {
            console.log(err)
            console.log(err.message)
            console.log(err.code)

        })

    }

}
