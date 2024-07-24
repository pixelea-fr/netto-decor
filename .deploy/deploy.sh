#!/bin/bash

# Function to compile SCSS to CSS
compile_scss() {
    local scss_file="$1"
    local css_file

    # Define the output CSS file path based on the specified savePath ("~/../..")
    css_file=$(dirname "$scss_file")/../../$(basename "$scss_file" .scss).css

    # Ensure the output directory exists
    mkdir -p "$(dirname "$css_file")"

    # Compile SCSS to CSS using the globally installed sass
    sass "$scss_file":"$css_file" --style expanded
}

# Find all SCSS files that do not start with an underscore and compile them
find /var/www/vhosts/netto-decor-habitat.pixelea.fr/httpdocs/wp-content/themes/netto-decor -name '*.scss' ! -name '_*' | while read -r scss_file; do
    compile_scss "$scss_file"
done

echo "SCSS compilation completed."
