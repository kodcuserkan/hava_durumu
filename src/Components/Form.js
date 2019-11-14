import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Şehir (örn : VAN)"/>
                    <input type="text" name="country" placeholder="Ülke (örn: TR)"/>
                    <button>Sorgula</button>
                </form>
            </div>
        )
    }
}
export default Form;