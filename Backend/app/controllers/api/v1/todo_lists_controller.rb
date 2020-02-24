class Api::V1::TodoListsController < ApplicationController
  # before_action :authorize_request, except: :create
  # before_action :find_todo_list, except: %i[create index]
 skip_before_action :verify_authenticity_token  

  # GET /todo_lists
  def index
    @todo_lists = TodoList.all
    render json: @todo_lists, status: :ok
  end

  # GET /todo_lists/{todo_listname}
  def show
     @todo_list = TodoList.find(params[:id])   
    render json: @todo_list, status: :ok
  end
 
  def new
    @todo_list = TodoList.new
  end
 
  # POST /todo_lists
  def create
    @todo_list = TodoList.new(todo_list_params)

    if @todo_list.save
      render json: @todo_list, status: :created
    else
      render json: { errors: @todo_list.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update   
    @todo_list = TodoList.find(params[:id])   
    if @todo_list.update_attributes(todo_list_params)   
    else     
    render json: @todo_list.errors, status: :unprocessable_entity
    end   
  end   

  # DELETE /todo_lists/{todo_listname}
  def destroy
    @todo_list = TodoList.find(params[:id])   
    @todo_list.destroy
  end

  private

  private
  def todo_list_params
    params.require(:todo_list).permit(:name)   
  end   
   
end 





