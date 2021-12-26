import { SubTitle, Text } from '@styles/styled-components'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const jobs = [
	{
		company: 'ACME General Corp.',
		id: 3,
		from: 'January 2022',
		to: 'Present',
		role: 'Senior Software Engineer',
	},
	{
		company: 'Nexient',
		id: 2,
		from: 'June 2021',
		to: 'December 2021',
		role: 'Developer II',
	},
	{
		company: 'Welcome Connect LLC',
		id: 1,
		from: 'March 2020',
		to: 'August 2021',
		role: 'Lead Web Developer',
	},
]

type Job = {
	company: string
	id: number
	from: string
	to: string
	role: string
}

export function WorkHistory() {
	const [activeTab, setActiveTab] = useState(jobs.length)

	return (
		<>
			<SubTitle variant="secondary">Where I've worked</SubTitle>
			<TabsContainer>
				<div>
					{jobs.map(job => (
						<Tab
							key={job.id}
							isActive={activeTab === job.id}
							onClick={() => setActiveTab(job.id)}
						>
							{job.company}
						</Tab>
					))}
				</div>
				{jobs.map(job => {
					if (job.id !== activeTab) return undefined
					return <JobContent job={job} key={job.id} />
				})}
			</TabsContainer>
		</>
	)
}

function JobContent({ job }: { job: Job }) {
	return (
		<div>
			<SubTitle variant="terciary">{job?.role}</SubTitle>
			<Text>
				{job?.from} - {job?.to}
			</Text>
		</div>
	)
}

const TabsContainer = styled.div`
	border-left: 2px solid #303d44;
	flex-grow: 1;
	display: flex;
`

const Tab = styled(Text)`
	padding: 0.5rem 1rem;
	position: relative;

	&:hover {
		color: ${({ theme }) => theme.colors.accent.primary};
		cursor: pointer;
	}

	${({ isActive }: { isActive?: boolean }) =>
		isActive &&
		css`
			color: ${({ theme }) => theme.colors.accent.primary};
			&::after {
				content: '';
				width: 2px;
				background: ${({ theme }) => theme.colors.accent.primary};
				height: 100%;
				position: absolute;
				top: 0;
				left: -2px;
			}
		`}
`
