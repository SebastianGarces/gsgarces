import { useRouter } from 'next/router'
import {
	Container,
	Frame,
	HeroContainer,
	LineTag,
	MiniBio,
	SubTitle,
	Title,
	TitleContainer,
	MiniBioContainer,
	Button,
} from '@styles/index.styles'

export default function HomePage() {
	const router = useRouter()

	return (
		<Container>
			<HeroContainer>
				<Frame />
				<TitleContainer>
					<Title>Gerardo Sebastian Garces</Title>
					<SubTitle>Software Engineer</SubTitle>
					<LineTag>I build things for the web.</LineTag>
				</TitleContainer>
				<MiniBioContainer>
					<MiniBio>
						I’m a Cleveland-based software engineer who specializes in
						building (and occacionally designing) exceptional digital
						experiences.
					</MiniBio>
					<MiniBio>
						Currently, I’m an engineer at <span>Welcome Connect LLC </span>
						focused on building next generation real estate software.
					</MiniBio>
				</MiniBioContainer>

				<Button onClick={() => router.push('mailto:gsgarces1@gmail.com')}>
					get-in-touch
				</Button>
			</HeroContainer>
		</Container>
	)
}
