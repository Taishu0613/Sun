// src/components/InstagramEmbed.jsx

function InstagramEmbed({ postUrl }) {
  return (
    <div style={{ maxWidth: 400 }}>
      <iframe
        src={postUrl}
        width="400"
        height="480"
        frameBorder="0"
        scrolling="no"
        allow="encrypted-media"
        title="Instagram Post"
      />
    </div>
  );
}

export default InstagramEmbed;
