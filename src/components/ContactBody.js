import React from "react"
import "./component-styles/ContactBody.css"
import Card from "./Card"
import contacts from "./contacts"

function ContactBody() {
    return (
        <div className="container-fluid cont" id="ContactBody">
            <h2 id="head">Contact</h2>
            <div className="row">
                <div className="col-lg-6">
                    <Card
                        name={contacts[0].name}
                        img={contacts[0].imgURL}
                        tel={contacts[0].phone}
                        email={contacts[0].email}
                    />
                </div>
                <div className="col-lg-6">
                    <Card
                        name={contacts[1].name}
                        img={contacts[1].imgURL}
                        tel={contacts[1].phone}
                        email={contacts[1].email}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Card
                        name={contacts[2].name}
                        img={contacts[2].imgURL}
                        tel={contacts[2].phone}
                        email={contacts[2].email}
                    />
                </div>
                <div className="col-lg-6">
                    <Card
                        name={contacts[3].name}
                        img={contacts[3].imgURL}
                        tel={contacts[3].phone}
                        email={contacts[3].email}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactBody;