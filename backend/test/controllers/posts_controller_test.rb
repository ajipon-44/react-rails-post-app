require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  def setup
		@sample = Post.create(title: "sample_title", content: "sample_content")
	end

	test "sould be invalid without a title" do
		assert_no_difference "Post.count" do
			post posts_path, params: { post: {
				title: "",
				content: "content"
			} }
		end
	end

	test "sould be invalid without contet" do
		assert_no_difference "Post.count" do
			post posts_path, params: { post: {
				title: "title",
				content: ""
			} }
		end
	end

	test "sould be invalid without a title and content" do
		assert_no_difference "Post.count" do
			post posts_path, params: { post: {
				title: "",
				content: ""
			} }
		end
	end

	test "valid post information" do
		assert_difference "Post.count", 1 do
			post posts_path, params: { post: {
				title: "title",
			  content: "content"
			} }
		end
	end

	test "should delete a post" do
		assert_difference "Post.count", -1 do
			delete post_path(@sample), params: { post: {
				title: "title",
			  content: "content"
			} }
		end
	end

	test "update should be invalid without title" do
		title = ""
		content = @sample.content
		put post_path(@sample), params: { post: {
			title: title,
			content: @sample.content
		} }
		@sample.reload

		assert_equal title, @sample.title
		assert_equal content, @sample.content
	end

	# test "should be invalid without content" do
	# end

	# test "should be invalid without title and content" do
	# end

	test "should update a post" do
		title = "edit title"
		content = "edit content"
		put post_path(@sample), params: { post: {
			title: title,
			content: content
		}}
		@sample.reload

		assert_equal title, @sample.title
		assert_equal content, @sample.content
	end
end
