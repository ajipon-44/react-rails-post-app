require "test_helper"

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
	def setup
		@post = Post.new(
			title: "",
			content: ""
		)
	end

	test "sould be invalid without a title" do
		@post.content = "hogehoge"
		assert_not @post.valid?
	end

	test "sould be invalid without contet" do
		@post.title = "hogehoge"
		assert_not @post.valid?
	end

	test "sould be invalid without a title and content" do
		assert_not @post.valid?
	end
end
