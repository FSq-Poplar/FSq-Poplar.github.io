# SKLearn Regression Optimizer

For whatever reason I often find myself with some
dataset of something, thinking "I wish I could figure
out approximately what the actual function for this is
so I can do X, but I'm too lazy to figure it out".

At some point I miraculously decided to stop being lazy
and wrote a general use class that runs a bunch of different
SKLearn regression models for whatever data you feed it, and have
added small features here and there over the past year or so.

This does NOT perform feature engineering for you.

What it does do, however, is get rid of the boilerplate work
of performance measurements and re-training of different
models until the desired accuracy is reached. It also
includes some basic utilities for saving models using Pickle.

> 2022-10-09 edit - I'm moving all code snippets to Github gists,
you can find the optimizer [here](
    https://gist.github.com/FSq-Poplar/9bf4aa822e5b1a7261aed8196a4c244f
).

Feel free to use it however - a shoutout is always welcome, but
as far as I'm concerned it's under an MIT license.
