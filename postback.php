<html>
<head>
</head>
<body>
<h1>POST-back Demonstration Page</h1>
<p>This page demonstrates that information may be passed to an external web site.</p>
<p>The following information was sent to this endpoint via a POST request:</p>
<pre><?php echo htmlspecialchars(file_get_contents("php://input")); ?></pre>
<p>This decodes to the following fields:</p>
<table style=\"width: 95%;\">
<tr><th style=\"width: 400px; text-align: left;\">Key</th>
<th style=\"width: auto; text-align: left;\">Value</th></tr>
<?php foreach ($_POST as $key => $value) { ?>
<tr><td><?php echo htmlspecialchars($key); ?></td><td><?php echo htmlspecialchars($value); ?></td></tr>
<?php } ?>
</table>
</body>
</html>
