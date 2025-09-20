import PropTypes from 'prop-types'

const Picture = ({ sources, alt, imgProps = {}, pictureProps = {} }) => {
  if (!sources) {
    return null;
  }

  const { webp, fallback } = sources;

  return (
    <picture {...pictureProps}>
      <source srcSet={webp} type="image/webp" />
      <img src={fallback} {...imgProps} alt={alt} />
    </picture>
  );
};

Picture.propTypes = {
  sources: PropTypes.shape({
    webp: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,
  }),
  alt: PropTypes.string.isRequired,
  imgProps: PropTypes.object,
  pictureProps: PropTypes.object,
};

export default Picture;
