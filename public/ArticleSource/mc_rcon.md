# Minecraft RCON

Those of you who run game servers at home, for kids or for
yourselves, are probably very familiar with Minecraft servers.
Additionally, you are probably very familiar with the many
limitations of Vanilla servers. One such limitation that became
an issue for us was that changing the weather and time were
Admin/OP commands, but the players didn't want that to be the
case; while
[scoreboard workarounds](
    https://life-improver.com/game/minecraft-how-to-execute-op-level-commands-for-non-op-players-with-command-signs/
)
exist, they're pretty bad.

It turns out Valve's
[RCON protocol](https://wiki.vg/RCON)
has an implementation built into Minecraft servers, so a web app
can be set up for players to call designated commands using
buttons, forms or whatever. I ended up making a quick
React/Express project and threw it on Heroku, allowing anyone
to set the weather and time however they wished by simply
hooking up buttons to hard coded commands. An example of one
such server is shown below, an Express.js implementation; I used
something very similar for my own server.

> 2022-10-09 edit - I'm moving all code snippets to Github gists,
you can find the server code [here](
    https://gist.github.com/FSq-Poplar/e4a2bb39b8a57df070d6b75c2b596359
).

Side note - shaders are really something else.

![image](../Resources/singletons/world1_port.png)
