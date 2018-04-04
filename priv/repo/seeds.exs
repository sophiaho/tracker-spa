# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TrackerSPA.Repo.insert!(%TrackerSPA.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TrackerSPA.Repo
  alias TrackerSPA.Accounts.User
  alias TrackerSPA.Jobs.Task

  def run do
    Repo.delete_all(User)
    a = Repo.insert!(%User{ email: "alice@example.com", name: "alice" })
    b = Repo.insert!(%User{ email: "bob@example.com", name: "bob" })
    c = Repo.insert!(%User{ email: "carol@example.com", name: "carol" })
    d = Repo.insert!(%User{ email: "dave@example.com", name: "dave" })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ body: "algebra", complete: false, length: 15, title: "Do homework", user_id: a.id })
    Repo.insert!(%Task{ body: "kitchen", complete: false, length: 15, title: "take out the trash", user_id: b.id })
    Repo.insert!(%Task{ body: "$4.00", complete: false, length: 15, title: "Do laundry", user_id: c.id })
    Repo.insert!(%Task{ body: "fish", complete: false, length: 15, title: "Feed cat", user_id: d.id })
  end
end

Seeds.run
