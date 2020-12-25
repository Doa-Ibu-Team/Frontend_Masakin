import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import profile from "./Profile.module.css";
import ImageProfile from "../../assets/images/profile/profile.png";
import EditProfileBtn from "../../assets/icons/edit-image.png";

const baseUrl = process.env.REACT_APP_BASE_URL
const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    "x-access-token": "Bearer " + localStorage.getItem("token")
  },
}

class Profile extends Component {
  state = {
    myrecipe: [],
    likedrecipe: [],
    savedrecipe: [],
  }

  myListActive = (e) => {
    const ListId = e.target.dataset.id;
    const buttons = document.querySelectorAll("." + profile.ItemTitle);
    const contentPartSection = document.querySelectorAll(
      "." + profile.ItemList
    );
    // remove class active-type and show-section
    buttons.forEach((item) => item.classList.remove(profile.ItemTitleActive));
    contentPartSection.forEach((item) =>
      item.classList.remove(profile.ItemListActive)
    );
    // add class active-type and show-section
    e.target.classList.add(profile.ItemTitleActive);
    document.querySelector(`#${ListId}`).classList.add(profile.ItemListActive);
  };

  getMyRecipe = () => {
    axios.get(baseUrl + `/recipe/b/myRecipe/`, config)
      .then((res) => {
        console.log(res.data)
        this.setState({
          myrecipe: res.data.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  likedRecipe = () => {
    axios.get(baseUrl + '/recipe/b/likedRecipe', config)
      .then((res) => {
        console.log(res.data)
        this.setState({
          likedrecipe: res.data.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  savedRecipe = async () => {
    axios.get(baseUrl + '/recipe/b/bookmarkedRecipe', config)
      .then((res) => {
        console.log(res.data)
        this.setState({
          savedrecipe: res.data.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount = () => {
    this.getMyRecipe()
    this.savedRecipe()
    this.likedRecipe()
    
  }

  render() {
    // console.log(this.state.profile);
    const { myrecipe, savedrecipe, likedrecipe, } = this.state
    console.log(this.state)
    return (
      <>
        <div className={profile.Section}>
          <div
            className={profile.Image + " mx-auto"}
            style={{ backgroundImage: `url(${ImageProfile})` }}
          >
            <img
              src={EditProfileBtn}
              className={profile.EditButton}
              alt=""
              height="24px"
              width="24px"
            //   onClick={this.updateEditSection}
            />
          </div>
          <div className={"mx-auto text-center "}>
            <p className={profile.Username + " mt-2"}>
              {localStorage.getItem('name')}
            </p>
          </div>
          <div
            className={
              `${profile.EditSection} mx-auto ${profile.Show}`
            }
          >
            <button className={profile.DefaultBtn + " d-block"}>
              Change Photo Profile
            </button>
            <button className={profile.DefaultBtn + " d-block"}>
              Change Password
            </button>
          </div>
        </div>


        <Container>
          <div className="my-list d-flex mt-5">
            <p className={profile.ItemTitle + " " + profile.ItemTitleActive} data-id={"MySection"} onClick={this.myListActive}>
              My Recipe
            </p>
            <p className={profile.ItemTitle} data-id={"SavedSection"} onClick={this.myListActive}>
              Saved Recipe
            </p>
            <p className={profile.ItemTitle} data-id={"LikedSection"} onClick={this.myListActive}>
              Liked Recipe
            </p>
          </div>
        </Container>
        <hr />
        <Container>
          <div className={profile.ItemList + " " + profile.ItemListActive} id="MySection">
            <div className={profile.CardWrapper}>
              {myrecipe && myrecipe.map(({ id_recipe, title, img }) => {
                return (
                  <>
                    <div href="/recipe" className={profile.CardList}>
                      <img src={'http://127.0.0.1:8000/' + img} style={{ width: "270px", height: "180px" }} />
                      <h1>{title}</h1>
                    </div>
                  </>
                )
              })
              }
            </div>
          </div>

          <div className={profile.ItemList} id="SavedSection">
            <div className={profile.CardWrapper}>
              {savedrecipe && savedrecipe.map(({ id_recipe, title, img }) => {
                return (
                  <>
                    <div href="/recipe" className={profile.CardList}>
                      <img src={'http://127.0.0.1:8000/' + img} style={{ width: "270px", height: "180px" }} />
                      <h1>{title}</h1>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className={profile.ItemList} id="LikedSection">
            <div className={profile.CardWrapper}>
              {
                likedrecipe && likedrecipe.map(({ id_recipe, title, img }) => {
                  return (
                    <>
                      <div href="/recipe" className={profile.CardList}>
                        <img src={'http://127.0.0.1:8000/' + img} style={{ width: "270px", height: "180px" }} />
                        <h1>{title}</h1>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>

        </Container>
      </>
    );
  }
}
export default Profile;