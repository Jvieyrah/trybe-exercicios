from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"
    
    
😎 Dica: Se você garantir que a imagem SVG seja renderizada utilizando a mesma interface que a imagem PNG, a imagem se tornará compatível. Para isso, você pode criar uma classe que implementa a interface PngInterface e que encapsula a imagem SVG. Essa classe pode ser chamada de Adapter. 😎

class SvgAdapter(PngInterface):
    def __init__(self, svg_image):
        self.svg_image = svg_image

    def draw(self):
        print(f"Drawing {self.svg.get_image()}")