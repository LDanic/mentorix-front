// Description.jsx
import "../styles/Description.css";

export default function Description() {
  return (
    <div className="description-container">
      <h2 className="project-info">Project Info</h2>
      <p className="project-desc">
        This overnight museum was designed by 15 Artists and 9 Art Directors…
      </p>

      <div className="info-field">
          <span className="label">Client</span>
          <span className="value">Art Government</span>
        </div>

      <div className="info-grid">
        <div className="info-field">
          <span className="label">Start Date</span>
          <span className="value">7-6-2022</span>
        </div>
        <div className="info-field">
          <span className="label">Deadline</span>
          <span className="value">7-7-2022</span>
        </div>

      </div>
      <div className="info-field">
          <span className="label">Team Members</span>
          <span className="value">12</span>
        </div>

      <div className="leader-field">
        <div className="leader-avatar" /* style={{ backgroundImage: `url(${avatar})` }} */ />
        <div className="leader-info">
          <span className="leader-name">Nader Ahmed</span>
          <span className="leader-role">Admin / Product Manager</span>
        </div>
      </div>

      <div className="project-type">
        <span className="label">Project Type</span>
        <span className="value">
          Art Direction - Video Production - Website
        </span>
      </div>
    </div>
  );
}
