import React from "react";

class BioUpdater extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.artist.id,
            bio: this.props.artist.bio
        }
        this.updateField = this.updateField.bind(this);
        this.processForm = this.processForm.bind(this);
    }

    processForm(e){
        e.preventDefault();
        this.props.updateBio(this.state);
        this.hideForm(e);
    }

    hideForm(e){
        const updaterBox = e.target.parentElement.parentElement;
        const bioBox = document.querySelector('.artist-bio');
        updaterBox.setAttribute('class', 'bio-updater box invisible');
        bioBox.setAttribute('class', 'artist-bio visible');
    }

    updateField(e){
        this.setState({bio: e.target.value});
    }

    render() {
        if (!this.props.isOwner) {
            return null;
        } else {
            return (
                <div className="bio-updater box invisible">
                    <form className="bio-updater form">
                        <textarea value={this.state.bio} onChange={this.updateField}/>
                        <button onClick={this.processForm}>
                            Save
                        </button>
                        <button onClick={this.hideForm}>
                            Cancel
                        </button>
                    </form>
                </div>
            )
        }
    }
}

export default BioUpdater;