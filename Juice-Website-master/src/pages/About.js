import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 12,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 5,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Fresh Sip</Typography><br/>
        <p>Our Story:</p><br/>
        <p>

At Fresh Sip, we believe that nature's goodness should be within reach for everyone, every day. Our journey began in 2010 when our founder, Jane, discovered the transformative power of fresh, nutrient-rich juices in her own life. Inspired by this experience, she set out on a mission to share the magic of nature's elixirs with the world.



We take great pride in crafting juices that are not only delicious but also packed with essential vitamins, minerals, and antioxidants. Every bottle of FreshSqueeze juice is a testament to our commitment to using only the finest, locally-sourced, and organic ingredients. Our juices are cold-pressed to preserve their natural goodness and vibrant flavors, ensuring that you get the maximum health benefits in every sip.



What sets us apart is our passion for innovation and flavor exploration. We blend exotic fruits, nutrient-rich greens, and a touch of culinary magic to create unique and refreshing juice concoctions. From our signature "Tropical Tango" to the invigorating "Green Vitality," each bottle is a delightful journey for your taste buds.



Beyond the nutritional benefits, FreshSqueeze Juices aim to be a source of holistic wellness for our customers. We believe that a healthy body and a happy soul go hand in hand. With every bottle, we strive to inspire and nourish your entire being, making you feel vibrant inside and out.
</p>
<p><br/>
Our Promise:</p>
<p><br/>

At Fresh Sip, we are more than just a juice brand; we are a community dedicated to healthy living and sustainability. We are committed to using eco-friendly packaging and supporting local farmers. With every purchase, you become a part of our sustainable journey towards a greener and healthier planet.



Thank you for being a part of our juice revolution! We are grateful for the opportunity to serve you with nature's finest elixirs. Explore our range of juices, find your favorites, and embark on a refreshing journey to better health.

If you have any questions or just want to say hello, feel free to reach out to us. We'd love to hear from you!</p>
<p><br/>

Stay fresh, stay healthy,</p><br/>
<p>

The Fresh Sip Team
        </p>
        
        
      </Box>
    </Layout>
  );
};

export default About;
