/* eslint-disable @wordpress/i18n-ellipsis */
import { useContext, useEffect, useState, useCallback } from 'react';
import { OnboardingContext } from '../context/context';
import { useNavigate } from '@reach/router';
import useAjax from 'madxartwork-app/hooks/use-ajax';
import Layout from '../components/layout/layout';
import PageContentLayout from '../components/layout/page-content-layout';

export default function HelloTheme() {
	const { state, updateState, getStateObjectToUpdate } = useContext( OnboardingContext ),
		{ ajaxState: activateHelloThemeAjaxState, setAjax: setActivateHelloThemeAjaxState } = useAjax(),
		// Allow navigating back to this screen if it was completed in the onboarding.
		[ helloInstalledInOnboarding, setHelloInstalledInOnboarding ] = useState( false ),
		[ isInstalling, setIsInstalling ] = useState( false ),
		noticeStateSuccess = {
			type: 'success',
			icon: 'eicon-check-circle-o',
			message: __( 'Your site’s got Hello theme. High-five!', 'madxartwork' ),
		},
		[ noticeState, setNoticeState ] = useState( state.isHelloThemeActivated ? noticeStateSuccess : null ),
		[ activeTimeouts, setActiveTimeouts ] = useState( [] ),
		continueWithHelloThemeText = state.isHelloThemeActivated ? __( 'Next', 'madxartwork' ) : __( 'Continue with Hello Theme', 'madxartwork' ),
		[ actionButtonText, setActionButtonText ] = useState( continueWithHelloThemeText ),
		navigate = useNavigate(),
		pageId = 'hello',
		nextStep = 'siteName',
		goToNextScreen = () => navigate( 'onboarding/' + nextStep );

	/**
	 * Setup
	 *
	 * If Hello Theme is already activated when onboarding starts, This screen is unneeded and is marked as 'completed'
	 * and skipped.
	 */
	useEffect( () => {
		if ( ! helloInstalledInOnboarding && state.isHelloThemeActivated ) {
			const stateToUpdate = getStateObjectToUpdate( state, 'steps', pageId, 'completed' );

			updateState( stateToUpdate );

			goToNextScreen();
		}
	}, [] );

	const resetScreenContent = () => {
		// Clear any active timeouts for changing the action button text during installation.
		activeTimeouts.forEach( ( timeoutID ) => clearTimeout( timeoutID ) );

		setActiveTimeouts( [] );

		setIsInstalling( false );

		setActionButtonText( continueWithHelloThemeText );
	};

	/**
	 * Callbacks
	 */
	const onHelloThemeActivationSuccess = useCallback( () => {
		setIsInstalling( false );

		madxartworkCommon.events.dispatchEvent( {
			event: 'indication prompt',
			version: '',
			details: {
				placement: madxartworkAppConfig.onboarding.eventPlacement,
				step: state.currentStep,
				action_state: 'success',
				action: 'hello theme activation',
			},
		} );

		setNoticeState( noticeStateSuccess );

		setActionButtonText( __( 'Next', 'madxartwork' ) );

		const stateToUpdate = getStateObjectToUpdate( state, 'steps', pageId, 'completed' );

		stateToUpdate.isHelloThemeActivated = true;

		updateState( stateToUpdate );

		setHelloInstalledInOnboarding( true );

		goToNextScreen();
	}, [] );

	const onErrorInstallHelloTheme = () => {
		madxartworkCommon.events.dispatchEvent( {
			event: 'indication prompt',
			version: '',
			details: {
				placement: madxartworkAppConfig.onboarding.eventPlacement,
				step: state.currentStep,
				action_state: 'failure',
				action: 'hello theme install',
			},
		} );

		setNoticeState( {
			type: 'error',
			icon: 'eicon-warning',
			message: __( 'There was a problem installing Hello Theme.', 'madxartwork' ),
		} );

		resetScreenContent();
	};

	const activateHelloTheme = () => {
		setIsInstalling( true );

		updateState( { isHelloThemeInstalled: true } );

		setActivateHelloThemeAjaxState( {
			data: { action: 'madxartwork_activate_hello_theme' },
		} );
	};

	const installHelloTheme = () => {
		if ( ! isInstalling ) {
			setIsInstalling( true );
		}

		wp.updates.ajax( 'install-theme', {
			slug: 'hello-madxartwork',
			success: () => activateHelloTheme(),
			error: () => onErrorInstallHelloTheme(),
		} );
	};

	const sendNextButtonEvent = () => {
		madxartworkCommon.events.dispatchEvent( {
			event: 'next',
			version: '',
			details: {
				placement: madxartworkAppConfig.onboarding.eventPlacement,
				step: state.currentStep,
			},
		} );
	};

	/**
	 * Action Button
	 */
	const actionButton = {
		text: actionButtonText,
		role: 'button',
	};

	if ( isInstalling ) {
		actionButton.className = 'e-onboarding__button--processing';
	}

	if ( state.isHelloThemeActivated ) {
		actionButton.onClick = () => {
			sendNextButtonEvent();

			goToNextScreen();
		};
	} else {
		actionButton.onClick = () => {
			sendNextButtonEvent();

			if ( state.isHelloThemeInstalled && ! state.isHelloThemeActivated ) {
				activateHelloTheme();
			} else if ( ! state.isHelloThemeInstalled ) {
				installHelloTheme();
			} else {
				goToNextScreen();
			}
		};
	}

	/**
	 * Skip Button
	 */
	let skipButton;

	if ( 'completed' !== state.steps[ pageId ] ) {
		skipButton = {
			text: __( 'Skip', 'madxartwork' ),
		};
	}

	/**
	 * Set timeouts for updating the 'Next' button text if the Hello Theme installation is taking too long.
	 */
	useEffect( () => {
		if ( isInstalling ) {
			setActionButtonText( (
				<>
					<i className="eicon-loading eicon-animation-spin" aria-hidden="true" />
				</>
			) );
		}

		const actionTextTimeouts = [];

		const timeout4 = setTimeout( () => {
			if ( ! isInstalling ) {
				return;
			}

			setActionButtonText( (
				<>
					<i className="eicon-loading eicon-animation-spin" aria-hidden="true" />
					<span className="e-onboarding__action-button-text">{ __( 'Hold on, this can take a minute...', 'madxartwork' ) }</span>
				</>
			) );
		}, 4000 );

		actionTextTimeouts.push( timeout4 );

		const timeout30 = setTimeout( () => {
			if ( ! isInstalling ) {
				return;
			}

			setActionButtonText( (
				<>
					<i className="eicon-loading eicon-animation-spin" aria-hidden="true" />
					<span className="e-onboarding__action-button-text">{ __( 'Okay, now we\'re really close...', 'madxartwork' ) }</span>
				</>
			) );
		}, 30000 );

		actionTextTimeouts.push( timeout30 );

		setActiveTimeouts( actionTextTimeouts );
	}, [ isInstalling ] );

	useEffect( () => {
		if ( 'initial' !== activateHelloThemeAjaxState.status ) {
			if ( 'success' === activateHelloThemeAjaxState.status && activateHelloThemeAjaxState.response?.helloThemeActivated ) {
				onHelloThemeActivationSuccess();
			} else if ( 'error' === activateHelloThemeAjaxState.status ) {
				madxartworkCommon.events.dispatchEvent( {
					event: 'indication prompt',
					version: '',
					details: {
						placement: madxartworkAppConfig.onboarding.eventPlacement,
						step: state.currentStep,
						action_state: 'failure',
						action: 'hello theme activation',
					},
				} );

				setNoticeState( {
					type: 'error',
					icon: 'eicon-warning',
					message: __( 'There was a problem activating Hello Theme.', 'madxartwork' ),
				} );

				// Clear any active timeouts for changing the action button text during installation.
				resetScreenContent();
			}
		}
	}, [ activateHelloThemeAjaxState.status ] );

	return (
		<Layout pageId={ pageId } nextStep={ nextStep }>
			<PageContentLayout
				image={ madxartworkCommon.config.urls.assets + 'images/app/onboarding/Illustration_Hello.svg' }
				title={ __( 'Every site starts with a theme.', 'madxartwork' ) }
				actionButton={ actionButton }
				skipButton={ skipButton }
				noticeState={ noticeState }
			>
				<p>
					{ __( 'Hello is madxartwork\'s official blank canvas theme optimized to build your website exactly the way you want.', 'madxartwork' ) }
				</p>
				<p>
					{ __( 'Here\'s why:', 'madxartwork' ) }
				</p>
				<ul className="e-onboarding__feature-list">
					<li>{ __( 'Light-weight and fast loading', 'madxartwork' ) }</li>
					<li>{ __( 'Great for SEO', 'madxartwork' ) }</li>
					<li>{ __( 'Already being used by 1M+ web creators', 'madxartwork' ) }</li>
				</ul>
			</PageContentLayout>
			<div className="e-onboarding__footnote">
				{ '* ' + __( 'You can switch your theme later on', 'madxartwork' ) }
			</div>
		</Layout>
	);
}
