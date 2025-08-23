import qrcode
from PIL import Image
import io
import base64

class SimpleQRGenerator:
    def __init__(self):
        """Simple QR Code Generator for PRHSS Past Papers"""
        self.website_url = "https://pastpaperprhss.netlify.app/"
        
    def generate_basic_qr(self, url, filename="qrcode.png"):
        """Generate a basic QR code"""
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_M,
            box_size=10,
            border=4,
        )
        qr.add_data(url)
        qr.make(fit=True)
        
        qr_img = qr.make_image(fill_color="black", back_color="white")
        qr_img.save(filename)
        print(f"✅ QR code saved as {filename}")
        return qr_img
    
    def generate_colored_qr(self, url, filename="colored_qrcode.png"):
        """Generate a colored QR code"""
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_M,
            box_size=10,
            border=4,
        )
        qr.add_data(url)
        qr.make(fit=True)
        
        # PRHSS brand colors
        qr_img = qr.make_image(fill_color="#667eea", back_color="white")
        qr_img.save(filename)
        print(f"✅ Colored QR code saved as {filename}")
        return qr_img
    
    def generate_high_res_qr(self, url, filename="high_res_qrcode.png"):
        """Generate a high resolution QR code for printing"""
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,  # High error correction
            box_size=15,  # Larger boxes for better printing
            border=6,
        )
        qr.add_data(url)
        qr.make(fit=True)
        
        qr_img = qr.make_image(fill_color="#667eea", back_color="white")
        qr_img.save(filename)
        print(f"✅ High-res QR code saved as {filename}")
        return qr_img
    
    def generate_all_qr_codes(self):
        """Generate all QR codes for the project"""
        print("🚀 Generating QR codes for PRHSS Past Papers...")
        print("=" * 50)
        
        # Basic black and white
        self.generate_basic_qr(
            self.website_url, 
            "website_basic.png"
        )
        
        # Colored with school brand
        self.generate_colored_qr(
            self.website_url, 
            "website_colored.png"
        )
        
        # High resolution for printing
        self.generate_high_res_qr(
            self.website_url, 
            "website_print.png"
        )
        
        # Mobile optimized
        self.generate_colored_qr(
            self.website_url, 
            "mobile_access.png"
        )
        
        # Literary festival version
        self.generate_high_res_qr(
            self.website_url, 
            "literary_festival.png"
        )
        
        print("=" * 50)
        print("✨ All QR codes generated successfully!")
        print(f"🌐 Website: {self.website_url}")
        print()
        print("📋 Files created:")
        print("  • website_basic.png - Basic black/white QR")
        print("  • website_colored.png - PRHSS branded colors")
        print("  • website_print.png - High-res for printing")
        print("  • mobile_access.png - Mobile-optimized")
        print("  • literary_festival.png - Festival presentation")

def main():
    """Main function"""
    print("🎯 PRHSS Past Papers - Simple QR Generator")
    print("=" * 50)
    
    qr_gen = SimpleQRGenerator()
    qr_gen.generate_all_qr_codes()
    
    print("\n🎉 Ready for your literary festival presentation!")
    print("💡 Use 'literary_festival.png' for your main presentation")
    print("📱 Use 'mobile_access.png' for phone scanning demos")

if __name__ == "__main__":
    try:
        main()
    except ImportError as e:
        print(f"❌ Error: {e}")
        print("💡 Install packages with: sudo pacman -S python-qrcode python-pillow")
    except Exception as e:
        print(f"❌ Error: {e}")
