import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import sr from '@utils/sr';
// Stats strip is commented out in the JSX below; kept so it can be switched back on.
// eslint-disable-next-line no-unused-vars
import { srConfig, github, skillGroups, activities, activitiesTitle, stats } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
// eslint-disable-next-line no-unused-vars
const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 0;
  margin: 0 0 25px;
  list-style: none;
  ${media.phone`grid-template-columns: repeat(2, 1fr);`};
  li {
    padding: 12px 10px;
    border-radius: ${theme.borderRadius};
    background-color: ${colors.lightNavy};
  }
  strong {
    display: block;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xl};
    font-weight: normal;
    color: ${colors.green};
  }
  span {
    display: block;
    margin-top: 4px;
    font-size: ${fontSizes.smish};
    line-height: 1.3;
    color: ${colors.slate};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.green};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const Chevron = () => <span className="chevron" aria-hidden="true" />;
const toggleStyles = `
  summary {
    display: flex;
    align-items: center;
    cursor: pointer;
    list-style: none;
    font-family: ${fonts.SFMono};
    transition: ${theme.transition};
    &::-webkit-details-marker {
      display: none;
    }
    &:hover,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  }
  .chevron {
    display: inline-block;
    flex: 0 0 20px;
    width: 20px;
    color: ${colors.green};
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.sm};
    line-height: 12px;
    &:before {
      content: '▹';
      display: inline-block;
      transition: transform 0.2s ease;
    }
  }
`;
const AllSkills = styled.details`
  ${toggleStyles};
  margin-top: 5px;
  > summary {
    display: inline-flex;
    padding: 4px 0;
    font-size: ${fontSizes.smish};
    color: ${colors.green};
  }
  &[open] > summary .chevron:before {
    transform: rotate(90deg);
  }
`;
const SkillGroups = styled.div`
  margin-top: 15px;
`;
const SkillGroup = styled.details`
  ${toggleStyles};
  border-top: 1px solid ${colors.lightestNavy};
  &:last-of-type {
    border-bottom: 1px solid ${colors.lightestNavy};
  }
  > summary {
    padding: 12px 0;
    font-size: ${fontSizes.sm};
    color: ${colors.lightestSlate};
  }
  &[open] > summary {
    color: ${colors.green};
  }
  &[open] > summary .chevron:before {
    transform: rotate(90deg);
  }
`;
const SkillGroupBody = styled.div`
  padding: 0 0 12px 24px;
  ${SkillsContainer} {
    margin: 0 0 6px;
  }
`;
const Activities = styled.div`
  margin-top: 15px;
  p {
    margin: 0;
  }
`;
const SkillLabel = styled.div`
  margin: 6px 0 10px;
  font-size: ${fontSizes.sm};
  color: ${colors.lightSlate};
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(GatsbyImage)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightestSlate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          {/* Stats strip hidden for now. Uncomment to show it again.
          stats && (
            <Stats>
              {stats.map(({ value, label }) => (
                <li key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </Stats>
          )
          */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {skills && skills.length > 0 && (
            <SkillsContainer>
              {skills.map((skill, i) => (
                <Skill key={i}>{skill}</Skill>
              ))}
            </SkillsContainer>
          )}
          {activities && (
            <Activities>
              <p>{activitiesTitle}</p>
              <SkillsContainer>
                {activities.map(activity => (
                  <Skill key={activity}>{activity}</Skill>
                ))}
              </SkillsContainer>
            </Activities>
          )}
          {skillGroups && (
            <AllSkills>
              <summary>
                <Chevron />
                All skills
              </summary>
              <SkillGroups>
                {skillGroups.map(({ title, items }) => (
                  <SkillGroup key={title}>
                    <summary>
                      <Chevron />
                      {title}
                    </summary>
                    <SkillGroupBody>
                      {items.map(({ label, list }, i) => (
                        <div key={i}>
                          {label && <SkillLabel>{label}</SkillLabel>}
                          <SkillsContainer>
                            {list.map(skill => (
                              <Skill key={skill}>{skill}</Skill>
                            ))}
                          </SkillsContainer>
                        </div>
                      ))}
                    </SkillGroupBody>
                  </SkillGroup>
                ))}
              </SkillGroups>
            </AllSkills>
          )}
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar image={getImage(avatar.childImageSharp)} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
