import React from "react";
import { Switch, Route } from "react-router-dom";
import ArtistPageNavContainer from "./artist_page_nav_container";
import StoreNav from "./store_nav";
import { StorefrontFooter } from "./storefront_footer";
import ReleasesIndexContainer from "./releases_index_container";
import MediaPanelContainer from "./media/media_panel_container";
import SidebarContainer from "./sidebar_container";

class Storefront extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            crateDive: false,
        }
        this.setColorProfile = this.setColorProfile.bind(this);
    }

    componentDidMount(){
        this.props.fetchArtist();
        this.props.fetchAllReleases();
    }

    componentDidUpdate(){
        if (!this.state.crateDive) {
            this.setState({crateDive: true});
        }
    }

    setColorProfile(){
        const colorArr = this.props.thisArtist.color_profile.split("/");
            this.colorProfile = {
                body: {'backgroundColor': colorArr[0]},
                primaryText: {'color': colorArr[1]},
                secondaryText: {'color': colorArr[2]},
                link: {'color': colorArr[3]},
                background: {'backgroundColor': colorArr[4]},
                navBar: {'backgroundColor': colorArr[5]}
            }
    }
    
    render(){
        if (!this.props.thisArtist || !this.state.crateDive) {
            return null;
        }
        this.setColorProfile();
        return (
            <div className="profile-main" > 
                < ArtistPageNavContainer colorProfile={this.colorProfile}/>
                <div className="profile-tryptich customizable-body" style={this.colorProfile.background}>
                    <div className="profile-displaywindow">
                        <div className="storefront-banner">
                            <span>-click to add banner image-</span>
                        </div>
                        < StoreNav />
                        <div className="storefront-display">
                            <Switch>
                                <Route path='/storefront/:artistId/album/:albumId' render={() => <MediaPanelContainer pageType={'album'}/>} />
                                <Route path='/storefront/:artistId/track/:trackId' render={() => <MediaPanelContainer pageType={'song'}/>} />
                                <Route path='/storefront/:artistId' render={() => <ReleasesIndexContainer linkColor={this.colorProfile.link} altText={this.colorProfile.secondaryText}/>} />
                            </Switch>
                            < SidebarContainer />
                        </div>
                    </div>
                </div>
                < StorefrontFooter />
            </div>
        )
    }
}

export default Storefront;