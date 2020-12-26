import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'

import detail from './Detail.module.css'
import Image from '../../assets/4da51338c06dd21688b82eae3bc9dfa6.jpg'
import LikedIcon from '../../assets/icons/like.png'
import SavedIcon from '../../assets/icons/saved.png'
import PlayIcon from '../../assets/icons/play.png'
import PhotoUser from '../../assets/photo-comment.png'
import ReactPlayer from 'react-player'

const baseUrl = process.env.REACT_APP_BASE_URL
const config = {
	headers: {
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
		isCommented: false
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
		return (
			<Container>
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
					<div className={detail.VideoList}>
						{
							recipe.videos && recipe.videos.map((videos) => {
								return (
									<>
										<h5>{videos.video_title}</h5>
										<div className={detail.VideoItem}>
											<div className={detail.PlayerWrapper}>
												<ReactPlayer
													config={{ controls : true}}
													className='react-player'
													url={`http://127.0.0.1:8000/` + videos.video_file}
													width='100%'
													height='100%'
													
												/>
											</div>
											{/* video src */}
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
											<div className={detail.ImageItem} style={{ backgroundImage: `url(${PhotoUser})` }}></div>

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
		)
	}
}

export default Detail