defmodule TrackerSPA.Jobs.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :body, :string
    field :complete, :boolean, default: false
    field :length, :integer
    field :title, :string
    belongs_to :user, TrackerSPA.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :body, :length, :complete])
    |> validate_required([:title, :body, :length, :complete])
  end
end
