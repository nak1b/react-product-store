var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    getInitialState: function(){
        return {
            submitted: false
        }
    },
    onSubmit: function(e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert("You suck at filling out forms. Email is always required in a lead capture form. Dummy!");
        } else {
            //Send request to email host or server!
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
            };

            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();

            this.setState({submitted:true});
        }
    },
    render: function() {
        var successStyle = {
            color: "#5CB85C",
            visibility: this.state.submitted ? "visible" : "hidden"
        };

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>Get Daily Deails</h3>
                    </div>
                    <div className="panel-body">
                        <NameField ref="fieldName"/>
                        <br />
                        <EmailField ref="fieldEmail"/>
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-primary submit" onClick={this.onSubmit}>Submit</button>
                            </div>
                            <div className="col-sm-6">
                                <h5 style={successStyle}>Success!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
