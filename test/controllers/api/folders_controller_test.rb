require 'test_helper'

class Api::FoldersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_folders_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_folders_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_folders_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_folders_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_folders_show_url
    assert_response :success
  end

end
