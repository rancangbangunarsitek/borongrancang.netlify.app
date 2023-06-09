import WizardFooter from 'madxartwork-app/organisms/wizard-footer';

export default function ActionsFooter( props ) {
	return (
		<WizardFooter separator justify="end">
			{ props.children }
		</WizardFooter>
	);
}

ActionsFooter.propTypes = {
	children: PropTypes.any,
};
