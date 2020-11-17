import React, { Component } from 'react'
import {
    Form,
    Button
} from 'tabler-react';
import "tabler-react/dist/Tabler.css";

import PromoItem from 'components/promoItem'

import './index.scss'


export default class ResetPass extends Component {

    constructor(props) {
        super(props)
        
        this.promosJson = {
            "bonuses": [{
                "title": "Sitecostructor.io",
                "description": "Site constructor",
                "link": "https://sitecostructor.io/?p=itpaycodes",
                "promocode": "itpaycodes"
            },
            {
                "title": "Appvision.com",
                "description": "SDK",
                "link": "http://appvision.com/+itpaycodes",
                "promocode": "itpaycodes"
            },
            {
                "title": "Analytics.com",
                "description": "Analytics",
                "link": "https://www.analytics.com/?ref=itpaycodes",
                "promocode": "itpaycodes"
            },
            {
                "title": "Logotype",
                "description": "Logos",
                "link": "https://www.logotype.design/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Certificates",
                "description": "SSL",
                "link": "https://www.certificates.com/ssl-certificate/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Seorank.com",
                "description": "SEO",
                "link": "https://seorank.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "marke.com",
                "description": "Marketing",
                "link": "http://marketing.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Major.com",
                "description": "Hosting",
                "link": "https://www.hosting.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Setup.com",
                "description": "Web sites",
                "link": "http://www.setup.com/instructions/promocode",
                "promocode": "itpaycodes"
            },
            {
                "title": "topvisor.com",
                "description": "Analytics",
                "link": "https://topvisor.com/promo/itpaycodes/",
                "promocode": "itpaycodes"
            },
            {
                "title": "seopult.com",
                "description": "SEO",
                "link": "https://promopult.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "sendpulse.com",
                "description": "Emails",
                "link": "https://sendpulse.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Turbotext.com",
                "description": "Content marketing",
                "link": "http://turbotext.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Witget.com",
                "description": "Widgets",
                "link": "https://witget.com/?partner=itpaycodes",
                "promocode": "itpaycodes"
            },
            {
                "title": "Spywords.com",
                "description": "Analytics",
                "link": "http://spywords.com",
                "promocode": "itpaycodes"
            },
            {
                "title": "Etxt.com",
                "description": "Content Marketing",
                "link": "https://www.etxt.com/",
                "promocode": "itpaycodes"
            },
              {
                "title": "Serpstat.com",
                "description": "Analytics",
                "link": "https://analytics.com",
                "promocode": "itpaycodes"
            },
            {
                "title": "webhost.com",
                "description": "Hosting",
                "link": "https://webhost.com/",
                "promocode": "itpaycodes"
            },
            {
                "title": "Unisender.com",
                "description": "Email marketing",
                "link": "https://www.unisender.com",
                "promocode": "itpaycodes"
            },
            {
                "title": "getuniq.com",
                "description": "Advertisment",
                "link": "http://itpaycodes.getuniq.com",
                "promocode": "itpaycodes"
            }],
            "header": {
              "balance": 213920,
              "next_payout": 159465,
              "currency": "usd"
            }
        }
        this.state = {
            filter: ""
        }        
    }

    componentDidMount(){
        
    }

    activate(bonus) {
        bonus.activated = true
    }

    renderPromoItems = () => {
        const { filter } = this.state

        return this.promosJson.bonuses.map((bonus, key) =>{
            if (bonus.title.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1) {
                return <PromoItem key={key} bonus={bonus} onActivated={() => this.activate(bonus)} />
            } else {
                return null
            }
        })
    }
    
    render() {

        return (
            <div id="promo-page">
                <div className="header">
                    <h3>Services</h3>
                    <div>
                        <Form.Input value={this.state.filter} onChange={(event) => this.setState({filter: event.target.value})} />
                        <Button onClick={() => this.setState({filter: ""})}>Reset</Button>
                    </div>
                    
                </div>
                
                <div class="promo-list">
                    { this.renderPromoItems() }
                </div>
            </div>
        )
    }
}