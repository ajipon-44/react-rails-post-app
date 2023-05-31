class PostsController < ApplicationController
	before_action :set_post, only: %i[show update destroy]

	def index
		@posts = Post.all
		render json: { posts: @posts }
	end

	def show
		render json: { post: @post }
	end

	def create
		if post_params[:title].blank? && post_params[:content].blank?
			render json: {status: 500} and return
		end
		post = Post.new(post_params)
		if post.save
			render json: { post: post }
		else
			render json: { status: "ERROR", post: post.errors }
		end
	end

	def update
		if post_params[:title].blank? && post_params[:content].blank?
			render json: {status: 500} and return
		end
		if @post.update(post_params)
			render json: { post: @post }
		else
			render json: { status: "ERROR", post: post.errors }
		end
	end

	def destroy
		@post.destroy
	end

	private

	def post_params
		params.require(:post).permit(:title, :content)
	end

	def set_post
		@post = Post.find(params[:id])
	end
end
