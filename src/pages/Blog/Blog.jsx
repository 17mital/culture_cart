import React from 'react'; 
import './Blog.css'; // Assuming you will move the styles to a CSS file

const Blog = () => {
    return (
        <div>
            <div className="blog_aim">
                <h1>Crafting Legends: A Social Enterprise Celebrating Authentic Artistry</h1> 
                <p>The India Craft House is a digital initiative committed to preserving and promoting India's ancient craft traditions. Launched nearly ten years ago as a social enterprise, our aim is to highlight and share the extraordinary talents of Indian artisans with a global audience. By doing so, we seek to enhance the respect and recognition of these skilled craftsmen while fostering appreciation for their centuries-old techniques. Our platform offers a meticulously curated collection of traditional crafts, transformed into elegant contemporary products, celebrating a rich legacy that spans across India.</p>
            </div>

            <div className="product1">
                <div className="text-content">
                    <h2>The Timeless Elegance of Pashmina</h2>
                    <p>Pashmina, known as the "soft gold" of textiles, is a symbol of luxury and warmth, handcrafted in the Himalayan valleys from the fine undercoat of the Changthangi goat. This exquisite fabric has been cherished for centuries, from Mughal emperors to European royalty.</p>
                    <p>The making of Pashmina is an art passed down through generations. Skilled artisans hand-spin the delicate wool into fine threads, which are then woven into luxurious shawls, stoles, and scarves. Each piece reflects the heritage, dedication, and artistry of Kashmir’s craftsmen.</p>
                    <p>At The India Craft House, we take pride in offering ethically sourced, authentic Pashmina products. By choosing our collection, you not only embrace elegance but also support the artisans who preserve this ancient craft.</p>
                    <p>Discover the unmatched beauty of Pashmina—a legacy of craftsmanship and cultural heritage.</p>
                </div>
                <img src="Media/blog/pashmina-shawl.jpg" alt="Pashmina" />
            </div>

            <div className="product2">
                <img src="Media/blog/paithani.jpg" alt="Paithani" />
                <div className="text-content">
                    <h2>Paithani Saree: The Royal Weave of Maharashtra</h2>
                    <p>The Paithani saree, often referred to as the "Queen of Silks," is a symbol of elegance and tradition from the town of Paithan in Maharashtra. Known for its rich silk fabric, vibrant colors, and intricate zari work, each Paithani saree is a masterpiece that reflects centuries-old craftsmanship. The hallmark of a Paithani is its intricate pallu (the decorative end of the saree), often featuring peacocks, florals, or geometric patterns woven in pure gold or silver threads.</p>
                    <p>Wearing a Paithani saree is like draping yourself in a piece of history. The saree's making involves meticulous hand-weaving, often taking months to complete a single piece. This makes each saree unique, carrying the legacy of the artisan who created it. Whether worn during weddings, festivals, or other special occasions, a Paithani saree exudes grace and opulence.</p>
                </div>
            </div>

            <div className="product3">
                <div className="text-content">
                    <h2>Ghewar: The Sweet Delight of Rajasthan</h2>
                    <p>Ghewar, a traditional Rajasthani dessert, is a culinary masterpiece that captures the essence of festive celebrations. Made from a unique blend of flour, ghee, and sugar syrup, this honeycomb-like sweet is known for its crisp texture and rich taste. Ghewar is especially popular during festivals like Teej and Raksha Bandhan, symbolizing joy and togetherness.</p>
                    <p>Crafted with precision, Ghewar requires skill and patience to achieve its perfect circular shape and intricate lattice design. It is often garnished with a generous layer of mawa (thickened milk) or flavored with saffron and cardamom, adding to its decadence. The combination of crunchy, syrup-soaked layers with creamy toppings creates a heavenly bite that melts in your mouth.</p>
                    <p>Savoring Ghewar is more than just enjoying a dessert—it's experiencing a slice of Rajasthani culture and tradition. Whether gifted to loved ones or served at special gatherings, Ghewar adds a touch of sweetness to every occasion. Discover our selection of authentic Ghewar, made with the finest ingredients, and indulge in this royal treat that has been cherished for generations.</p>
                </div>
                <img src="Media/blog/ghevar-sweet.jpg" alt="Ghewar" />
            </div>
        </div>
    );
};

export default Blog;
