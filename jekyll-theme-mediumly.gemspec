# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-mediumly"
  spec.version       = "1.0.0"
  spec.authors       = ["RockmanJoe"]
  spec.email         = ["rockmanjoe64@proton.me"]

  spec.summary       = "A Jekyll theme inspired by Medium's design and typography."
  spec.homepage      = "https://github.com/trespass-studios/jekyll-theme-mediumly"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
