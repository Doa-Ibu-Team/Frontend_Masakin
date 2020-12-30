import React, { Component } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import profile from "./Profile.module.css";
import EditProfileBtn from "../../assets/icons/edit-image.png";
import EditBtn from "../../assets/icons/edit.png";
import DeleteBtn from "../../assets/icons/delete.png";

const baseUrl = process.env.REACT_APP_BASE_URL;
const config = {
  headers: {
    "Content-Type": "multipart/form-data",
    "x-access-token": "Bearer " + localStorage.getItem("token"),
  },
};

const configDelete = {
  headers: {
    "x-access-token": "Bearer " + localStorage.getItem("token"),
  },
};

class Profile extends Component {
  state = {
    myrecipe: [],
    likedrecipe: [],
    savedrecipe: [],
    password: "",
    password_conf: "",
    old_password: "",
    profile_photo: "",
  };

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

  //Modal Photo
  handleClose = () =>
    this.setState({
      showModal: false,
      img: [],
    });
  handleShow = () =>
    this.setState({
      showModal: true,
    });
  //Modal Password
  handleClosePw = () =>
    this.setState({
      showModalPw: false,
    });
  handleShowPw = () =>
    this.setState({
      showModalPw: true,
    });

  handleFile = (e) => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
      img: e.target.files,
    });
  };

  updatePhoto = () => {
    let formdata = new FormData();
    for (let i = 0; i < this.state.img.length; i++) {
      formdata.append("img", this.state.img[i]);
    }
    axios
      .patch(baseUrl + "/user/change_profile/", formdata, configDelete)
      .then(({ data }) => {
        swal("sukses mengganti foto");
        this.setState({
          showModal: false,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  pwHandler = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  changePass = (e) => {
    if (this.state.password !== this.state.password_conf) {
      swal("Password harus sama!");
    } else {
      const data = {
        email: localStorage.getItem("email"),
        oldPassword: this.state.old_password,
        newPassword: this.state.password,
      };
      console.log(data);
      axios
        .patch(baseUrl + `/user/change_password`, data, configDelete)
        .then(({ data }) => {
          console.log(data);
          swal("Password berhasil diubah");
          this.setState({
            showModalPw: false,
          });
        })
        .catch((error) => {
          if (error.response.data.status === 403) {
            swal("Password Salah!");
          } else {
            console.log(error);
          }
        });
    }
  };

  getMyRecipe = () => {
    axios
      .get(baseUrl + `/user/myRecipe/`, config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          myrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  likedRecipe = () => {
    axios
      .get(baseUrl + "/user/getLike", config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          likedrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  savedRecipe = () => {
    axios
      .get(baseUrl + "/user/getbookmark", config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          savedrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteRecipe = (e) => {
    // console.log(e.target.id)
    axios
      .delete(baseUrl + "/recipe/delete/" + e.target.id, config)
      .then((res) => {
        swal("Data berhasil dihapus");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getMyRecipe();
    this.savedRecipe();
    this.likedRecipe();
    axios
      .get(baseUrl + `/user/profilePhoto`, configDelete)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          profile_photo: data[0].img,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // console.log(this.state.profile);
    const {
      myrecipe,
      savedrecipe,
      likedrecipe,
      old_password,
      password,
      password_conf,
    } = this.state;
    console.log(this.state);
    return (
      <>
        <Container>
          <div className={profile.Section}>
            <div
              className={profile.Image + " mx-auto"}
              style={{
                backgroundImage: `url(${baseUrl + this.state.profile_photo})`,
              }}
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
                {localStorage.getItem("name")}
              </p>
            </div>
            <div className={`${profile.EditSection} mx-auto ${profile.Show}`}>
              <button
                className={profile.DefaultBtn + " d-block"}
                onClick={this.handleShow}
              >
                Change Photo Profile
              </button>
              <button
                className={profile.DefaultBtn + " d-block"}
                onClick={this.handleShowPw}
              >
                Change Password
              </button>
            </div>
          </div>
        </Container>

        <Container className="mb-5">
          <div className="my-list d-flex mt-5">
            <p
              className={profile.ItemTitle + " " + profile.ItemTitleActive}
              data-id={"MySection"}
              onClick={this.myListActive}
            >
              My Recipe
            </p>
            <p
              className={profile.ItemTitle}
              data-id={"SavedSection"}
              onClick={this.myListActive}
            >
              Saved Recipe
            </p>
            <p
              className={profile.ItemTitle}
              data-id={"LikedSection"}
              onClick={this.myListActive}
            >
              Liked Recipe
            </p>
          </div>
        </Container>
        <hr />
        <Container>
          <div
            className={profile.ItemList + " " + profile.ItemListActive}
            id="MySection"
          >
            <div className={profile.CardWrapper}>
              {myrecipe &&
                myrecipe.map(({ id_recipe, title, img }) => {
                  return (
                    <>
                      <div className={profile.CardList}>
                        <Link
                          to={{
                            pathname: `/recipe/${id_recipe}`,
                          }}
                        >
                          <img
                            alt="img"
                            src={baseUrl/ + img}
                            style={{ width: "270px", height: "180px" }}
                          />
                          <h1>{title}</h1>
                        </Link>
                        <div className="row">
                          <Link to={{ pathname: `/edit/${id_recipe}` }}>
                            <img
                              src={EditBtn}
                              className={profile.EditButton}
                              alt=""
                              height="24px"
                              width="24px"
                            />
                          </Link>
                          <img
                            src={DeleteBtn}
                            className={profile.DeleteButton}
                            alt=""
                            id={id_recipe}
                            height="24px"
                            width="24px"
                            onClick={this.deleteRecipe}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>

          <div className={profile.ItemList} id="SavedSection">
            <div className={profile.CardWrapper}>
              {savedrecipe &&
                savedrecipe.map(({ id_recipe, title, img }) => {
                  return (
                    <>
                      <Link
                        to={{
                          pathname: `/recipe/${id_recipe}`,
                        }}
                      >
                        <div href="/recipe" className={profile.CardList}>
                          <img
                            alt="img"
                            src={baseUrl/ + img}
                            style={{ width: "270px", height: "180px" }}
                          />
                          <h1>{title}</h1>
                        </div>
                      </Link>
                    </>
                  );
                })}
            </div>
          </div>

          <div className={profile.ItemList} id="LikedSection">
            <div className={profile.CardWrapper}>
              {likedrecipe &&
                likedrecipe.map(({ id_recipe, title, img }) => {
                  return (
                    <>
                      <Link
                        to={{
                          pathname: `/recipe/${id_recipe}`,
                        }}
                      >
                        <div href="/recipe" className={profile.CardList}>
                          <img
                            alt="img"
                            src={baseUrl/ + img}
                            style={{ width: "270px", height: "180px" }}
                          />
                          <h1>{title}</h1>
                        </div>
                      </Link>
                    </>
                  );
                })}
            </div>
          </div>
        </Container>

        {/* Modal Edit Photo */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" name="img" onChange={this.handleFile} />
            <img alt="img" src={this.state.img} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.updatePhoto}>
              Apply Change
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal Change Password */}
        <Modal show={this.state.showModalPw} onHide={this.handleClosePw}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              name="old_password"
              placeholder="Old Password"
              value={old_password}
              onChange={this.pwHandler}
            />
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="New Password"
              value={password}
              onChange={this.pwHandler}
            />
            <Form.Label>Confirm Your Password</Form.Label>
            <Form.Control
              type="password"
              name="password_conf"
              placeholder="Confirmation Password"
              value={password_conf}
              onChange={this.pwHandler}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosePw}>
              Close
            </Button>
            <Button variant="primary" onClick={this.changePass}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Profile;
