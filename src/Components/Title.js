import React, { Component } from 'react'
class Title extends Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Hava Durumu</h1>
                <h3 className="title-container__subtitle">Şehir/Ülke'yi giriniz:</h3>
            </div>
        )
    }
}

export default Title;