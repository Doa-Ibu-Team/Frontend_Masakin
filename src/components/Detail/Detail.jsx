import React, { Component } from 'react'
import { Container, Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import detail from './Detail.module.css'
import LikedIcon from '../../assets/icons/like.png'
import SavedIcon from '../../assets/icons/saved.png'
import PhotoUser from '../../assets/photo-comment.png'
import ReactPlayer from 'react-player'
import EditBtn from "../../assets/icons/edit.png";
import DeleteBtn from "../../assets/icons/delete.png";

const baseUrl = process.env.REACT_APP_BASE_URL
const config = {
	headers: {
		"x-access-token": "Bearer " + localStorage.getItem("token")
	},
}
const configUpdate = {
	headers: {
		'Content-Type': 'multipart/form-data',
		"x-access-token": "Bearer " + localStorage.getItem("token")
	},
}
const xpostdata = ''

class Detail extends Component {
	constructor() {
		super()
	}
	state = {
		recipe: [],
		comment: [],
		liked: false,
		saved: false,
		videoToEdit: 0,
		videos: [],
		isCommented: false,
	}

	//Modal Photo
	handleClose = (e) =>
		this.setState({
			showModal: false,
			videoToEdit: 0,
			videos: []
		});
	handleCloseAdd = (e) =>
		this.setState({
			showModalAdd: false,
			videos: []
		});
	handleShow = (e) =>
		this.setState({
			showModal: true,
			videoToEdit: e.target.id
		});
	handleShowAdd = (e) =>
		this.setState({
			showModalAdd: true,
		});
	handleVideo = (event) => {
		this.setState({
			videos: event.target.files
		})
	}

	deleteVideo = (event) => {
		axios.delete(baseUrl + '/recipe/video/' + event.target.id, config)
			.then((result) => {
				console.log(result.data)
				swal('video berhasil dihapus')
			}).catch((error) => {
				console.log(error)
			})
	}

	addVideo = () => {
		let formdata = new FormData()
		for (let i = 0; i < this.state.videos.length; i++) {
			formdata.append("videos", this.state.videos[i]);
		}
		axios.post(baseUrl + '/recipe/video/' + this.props.id, formdata, configUpdate)
			.then(({ data }) => {
				console.log(data)
				swal("berhasil menambahkan video")
				this.setState({
					showModalAdd: false,
					videos: []
				});

			}).catch((error) => {
				console.log(error)
			})

	}

	updateVideo = () => {
		let formdata = new FormData()
		for (let i = 0; i < this.state.videos.length; i++) {
			formdata.append("videos", this.state.videos[i]);
		}
		axios.put(baseUrl + '/recipe/video/' + this.state.videoToEdit, formdata, configUpdate)
			.then(({ data }) => {
				swal('sukses menambahkan video baru')
				this.setState({
					showModal: false,
					videoToEdit: 0,
					videos: []
				});
			}).catch((error) => {
				console.log(error)
			})

	}

	bookmarkItem = () => {
		axios.post(baseUrl + '/user/addBookmark/' + this.props.id, xpostdata, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					saved: true
				})
				swal(data.message)
			}).catch((error) => {
				console.log(error)
			})
	}

	unbookmarkItem = () => {
		axios.delete(baseUrl + '/user/removeBookmark/' + this.props.id, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					saved: false
				})
				swal(data.message)
			}).catch((error) => {
				console.log(error)
			})
	}

	likeItem = () => {
		axios.post(baseUrl + '/user/addLike/' + this.props.id, xpostdata, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					liked: true
				})
				swal(data.message)
			}).catch((error) => {
				console.log(error)
			})
	}

	unlikeItem = () => {
		axios.delete(baseUrl + '/user/removeLike/' + this.props.id, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					liked: false
				})
				swal(data.message)
			}).catch((error) => {
				console.log(error)
			})
	}

	addComment = () => {
		const body = {
			comment: this.comment
		}
		axios.post(baseUrl + '/user/addComment/' + this.props.id, body, config)
			.then(({ data }) => {
				swal('Berhasil menambahkan komentar')
				this.forceUpdate()
			}).catch((error) => {
				console.log(error)
			})
	}

	componentDidMount = () => {
		axios.get(baseUrl + '/recipe/' + this.props.id, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					recipe: data.data
				})
			}).catch((error) => {
				console.log(error)
			})
		axios.get(baseUrl + '/recipe/comment/' + this.props.id, config)
			.then(({ data }) => {
				console.log(data)
				this.setState({
					comment: data.data
				})
			}).catch((error) => {
				console.log(error)
			})
		axios.get(baseUrl + '/user/checkLike/' + this.props.id, config)
			.then(({ data }) => {
				if (data[0]) {
					this.setState({
						liked: true
					})
				}
			}).catch((error) => {

			})
		axios.get(baseUrl + '/user/checkBookmark/' + this.props.id, config)
			.then(({ data }) => {
				if (data[0]) {
					this.setState({
						saved: true
					})
				}
			}).catch((error) => {

			})
	}

	render() {
		console.log(this.state)
		const { recipe, comment } = this.state
		let bookmarkBtn =
			<>
				<div className={detail.SavedButton} onClick={this.unbookmarkItem}>
					<img src={SavedIcon} alt="" />
				</div>
			</>
		if (!this.state.saved) {
			bookmarkBtn =
				<>
					<div className={detail.UnsavedButton} onClick={this.bookmarkItem}>
						<img src={SavedIcon} alt="" />
					</div> </>
		}
		let likeBtn =
			<>
				<div className={detail.LikedButton} onClick={this.unlikeItem}>
					<img src={LikedIcon} alt="" />
				</div>
			</>
		if (!this.state.liked) {
			likeBtn =
				<>
					<div className={detail.UnlikedButton} onClick={this.likeItem}>
						<img src={LikedIcon} alt="" />
					</div>
				</>
		}
		let BtnAddVideo;
		if (recipe.id_user == localStorage.getItem('user_ID')) {
			BtnAddVideo =
				<>
					<button className="btn btn-outline-dark mb-3" onClick={this.handleShowAdd}> + | Add Video </button>
				</>
		}
		return (
			<>
				<Container className="mb-4">
					<div className="text-center">
						<h1 className={'mx-auto ' + detail.Title}>{recipe.title}</h1>
					</div>
					{/* {isCommented && window.location.reload()   } */}
					<div className={'mx-auto ' + detail.ImageSize} style={{ backgroundImage: `url(${'http://127.0.0.1:8000' + recipe.img})` }} >
						<div className={detail.ButtonList}>
							{bookmarkBtn}
							{likeBtn}
						</div>
					</div>
					<div className={'mx-auto ' + detail.Description}>
						<h2 className={detail.TextDesc}>Ingredients</h2>
						<div className={detail.StepList}>
							<span style={{ whiteSpace: 'pre-line' }}>
								{recipe.ingredients}
							</span>
						</div>
						<h2 className={detail.TextVideo}>Video Step</h2>
						{BtnAddVideo}
						<div className={detail.VideoList}>
							{
								recipe.videos && recipe.videos.map((videos) => {
									let BtnEdit, BtnDelete;
									if (recipe.id_user == localStorage.getItem('user_ID')) {
										BtnEdit =
											<>
												<img
													id={videos.id}
													src={EditBtn}
													className={detail.EditButton}
													height="24px"
													width="24px"
													onClick={this.handleShow}
												/>
											</>
										BtnDelete =
											<>
												<img
													id={videos.id}
													src={DeleteBtn}
													className={detail.DeleteButton}
													height="24px"
													width="24px"
													onClick={this.deleteVideo} />
											</>
									}
									return (
										<>
											<h5>{videos.video_title}</h5>
											<div className="d-flex justify-content-start ml-2">
												{BtnEdit}
												{BtnDelete}
											</div>
											<div className={detail.VideoItem}>
												<div className={detail.PlayerWrapper}>
													<ReactPlayer
														config={{ controls: true }}
														className='react-player'
														url={`http://127.0.0.1:8000/` + videos.video_file}
														width='100%'
														height='100%'

													/>
												</div>
											</div>
										</>
									)
								})
							}
						</div>
						<div className={'text-center ' + detail.CommentSection}>
							<textarea name="comment" id="" className={detail.CommentForm} placeholder="Comment" onChange={(e) => (this.comment = e.target.value)}></textarea>
							<button className={detail.CommentButton} onClick={this.addComment}>Send</button>
						</div>
						<div className={detail.CommentList}>
							<h2 className={detail.TextComment}>Comment</h2>
							{
								comment && comment.map((comm) => {
									return (
										<>
											<div className={'d-flex ' + detail.CommentItem}>
												<div className={detail.ImageItem} > 
													<img src={baseUrl + comm.img} style={{maxWidth:"48px",maxHeight:"48px",borderRadius: "50%"}}/>
												</div>

												<div className={detail.CommentUser}>
													<span className={detail.CommentUserName}>{comm.name}</span>
													<br />
													<span className={detail.CommentUserText}>{comm.comment}</span>
												</div>

											</div>
										</>
									)
								})
							}

						</div>
					</div>
				</Container>

				{/* Modal Edit Video */}
				<Modal show={this.state.showModal} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Edit Video</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input
							type="file" name='videos' onChange={this.handleVideo}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
			   			</Button>
						<Button variant="primary" onClick={this.updateVideo}>
							Change Recipe Video
			   			</Button>
					</Modal.Footer>
				</Modal>

				{/* Modal Add Video */}
				<Modal show={this.state.showModalAdd} onHide={this.handleCloseAdd}>
					<Modal.Header closeButton>
						<Modal.Title>Add New Video</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<input
							type="file" name='videos' onChange={this.handleVideo}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleCloseAdd}>
							Close
			   			</Button>
						<Button variant="primary" onClick={this.addVideo}>
							Add Recipe Video
			   			</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default Detail