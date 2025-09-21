from PIL import Image

def compress_png(input_path, output_path, compression_level=6):
    # Open the image file
    with Image.open(input_path) as img:
        # Save with specified compression level
        img.save(output_path, format='PNG', optimize=True, compress_level=compression_level)

# Example usage
compress_png('street_green_light.png', 'street_green_lighta.png', compression_level=9)
