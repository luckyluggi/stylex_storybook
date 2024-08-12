import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    width: '100%',
    maxWidth: 800,
    minHeight: 40,
    background: "red"
  },
});

export function MyButton(props: any) {
  return (
    <button {...props} {...stylex.props(styles.root)} />
  );
}

export default MyButton;
