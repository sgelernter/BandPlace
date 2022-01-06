import React from "react";
import { Link } from "react-router-dom";

class AlbumPanel extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRelease();
        this.props.fetchAlbumArtist();
    }

    render(){
        if (!this.props.albumInfo) {
            return null;
        } else {
            return (
                <div className="album-panel">
                    <div className="album-info left">
                        <div className="album-info title">
                            <h2>{this.props.albumInfo.title}</h2>
                            <span> by {this.props.albumArtist.username} </span> 
                        </div>
                        <div className="jukebox">

                        </div>
                        <div className="album-info description">
                            <p>{this.props.albumInfo.description}</p>
                        </div>
                        <div className="album-info tags">
                            <h4>Tags</h4>
                            <ul>
                                <li>
                                    genre
                                </li> 
                                <li>
                                    subgenre
                                </li> 
                                <li>
                                    other genre
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div className="album-info right">
                        <div className="album-cover">
                            ALBUM COVER
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default AlbumPanel;