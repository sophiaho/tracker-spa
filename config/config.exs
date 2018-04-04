# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :trackerSPA,
  ecto_repos: [TrackerSPA.Repo]

# Configures the endpoint
config :trackerSPA, TrackerSPAWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "DGkI/N1Cb7DSQSg67p/7rG3SOQMA3FuEgYuhq9WdvfrebTPL7l/uz/xP4CJiy2wk",
  render_errors: [view: TrackerSPAWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TrackerSPA.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
